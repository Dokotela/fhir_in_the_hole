import 'package:pocketbase/pocketbase.dart';

Future<void> main() async {
  final PocketBase pb = PocketBase('http://127.0.0.1:8090');

  // Authenticate
  await pb.admins.authWithPassword('grey@fhirfli.dev', '01 password');

  // Create or update the accounts
  print('Creating or updating accounts...');
  // await createOrUpdateRecord(pb, account1);

  await createOrUpdateRecord(pb, account1);
  await createOrUpdateRecord(pb, account2);
  await createOrUpdateRecord(pb, account3);
  await createOrUpdateRecord(pb, account4);

  // Print a message to confirm the operation
  print('Accounts created or updated successfully.');
}

// Function to create or update a record
Future<void> createOrUpdateRecord(
    PocketBase pb, Map<String, dynamic> resource) async {
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

final String pocketbaseId = '4260a7372075e64';
//PocketbaseId.generate();

final account1 = {
  "resourceType": "Account",
  "id": pocketbaseId,
  "name": "Account 1",
  "versionId": 1,
  "resource": {
    "status": "active", // This field will be saved
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
    "status": "active", // This field will be saved
    "resourceType": "Account",
    "id": pocketbaseId,
    "name": "Account 2"
  }
};

final account3 = {
  "resourceType": "Account",
  "id": pocketbaseId,
  "name": "Account 3",
  "versionId": 1,
  "resource": {
    "status": "active", // This field will be saved
    "resourceType": "Account",
    "id": pocketbaseId,
    "name": "Account 3"
  }
};
final account4 = {
  "resourceType": "Account",
  "id": pocketbaseId,
  "name": "Account 4",
  "versionId": 1,
  "resource": {
    "status": "active", // This field will be saved
    "resourceType": "Account",
    "id": pocketbaseId,
    "name": "Account 4"
  }
};
final bp = {
  "resourceType": "BiologicallyDerivedProduct",
  "id": pocketbaseId,
  "name": "BDP",
  "versionId": 1,
  "resource": {
    "resourceType": "BiologicallyDerivedProduct",
    "id": pocketbaseId,
  }
};
