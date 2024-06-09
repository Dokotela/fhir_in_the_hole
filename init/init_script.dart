import 'package:pocketbase/pocketbase.dart';
import 'package:http/http.dart' as http;

import 'collections.dart';

Future<void> main() async {
  final PocketBase pb = PocketBase('http://127.0.0.1:8090');
  await pb.admins.authWithPassword('grey@fhirfli.dev', '01 password');
  // await initTables(pb);
  await initTriggers(pb);
}

Future<void> initTables(PocketBase pb) async {
  for (final collection in collections) {
    await pb.collections.create(
      body: {
        'name': collection['name'].toString().toLowerCase(),
        'type': 'base',
        'system': true,
        'schema': collection['schema'],
      },
    );
  }
}

Future<void> initTriggers(PocketBase pb) async {
// Create triggers
  for (final collection in collections) {
    if (collection['name'].endsWith('History')) continue; // Skip history tables
    final resourceName = collection['name'];
    final historyName = '${resourceName}History';

    final triggerSQL = '''
    CREATE TRIGGER IF NOT EXISTS before_${resourceName}_update
    BEFORE UPDATE ON $resourceName
    FOR EACH ROW
    BEGIN
      INSERT INTO $historyName (id, versionId, resource)
      VALUES (OLD.id, OLD.versionId, OLD.resource);
      SET NEW.versionId = OLD.versionId + 1;
    END;
  ''';

    await executeRawSQL(pb, triggerSQL);
  }
}

Future<void> executeRawSQL(PocketBase pb, String sql) async {
  final response = await http.post(
    Uri.parse(
        '${pb.baseUrl}/api/execute-sql'), // This endpoint should be created on the server
    headers: {'Content-Type': 'application/json'},
    body: '{"sql": "$sql"}',
  );

  if (response.statusCode == 200) {
    print('SQL executed successfully');
  } else {
    print('Error executing SQL: ${response.body}');
  }
}
