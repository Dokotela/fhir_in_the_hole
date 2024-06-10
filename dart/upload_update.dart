import 'package:pocketbase/pocketbase.dart';

Future<void> main() async {
  final PocketBase pb = PocketBase('http://127.0.0.1:8090');

  // Authenticate
  await pb.admins.authWithPassword('grey@fhirfli.dev', '01 password');

  final String pocketbaseId = '4260a7372075e64';
  //PocketbaseId.generate();

  // Define the account records
  final account1 = {
    "resourceType": "Account",
    "id": pocketbaseId,
    "name": "Account 1",
    "versionId": 1,
    "resource": {
      "resourceType": "Account",
      "id": pocketbaseId,
      "name": "Account 1"
    }
  };

  final account2 = {
    "resourceType": "Account",
    "id": pocketbaseId,
    "name": "Account 2",
    "versionId": 1,
    "resource": {
      "resourceType": "Account",
      "id": pocketbaseId,
      "name": "Account 2"
    }
  };

  // Function to create or update a record
  Future<void> createOrUpdateRecord(Map<String, dynamic> resource) async {
    try {
      if (resource['id'] == null) {
        throw Exception('Record ID is required');
      }
      final RecordService recordService = pb.collection(
          resource['resource']['resourceType'].toString().toLowerCase());
      print('got records service');
      await recordService.update(
        resource['id'] as String,
        body: resource,
      );
      print('Record created or updated successfully.');
    } catch (e) {
      print('Error creating or updating record: $e');
      if (e is ClientException && e.statusCode == 404) {
        await pb
            .collection(
                resource['resource']['resourceType'].toString().toLowerCase())
            .create(body: resource);
      } else {
        rethrow;
      }
    }
  }

  // Create or update the accounts
  print('Creating or updating accounts...');
  await createOrUpdateRecord(account1);
  print('Account 1 created or updated successfully.');
  await createOrUpdateRecord(account2);

  // Print a message to confirm the operation
  print('Accounts created or updated successfully.');
}
