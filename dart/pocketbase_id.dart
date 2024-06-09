import 'package:fhir_r4/fhir_r4.dart';

extension PocketbaseId on Resource {
  static String generate() =>
      generateNewUuidString().replaceAll('-', '').substring(12, 27);

  Resource get newPocketbaseId {
    final Map<String, dynamic> json = this.toJson();
    json['id'] = generate();
    return Resource.fromJson(json);
  }

  Resource get newPocketbaseIdIfNoId =>
      this.id != null && this.id.toString().length == 15
          ? this
          : newPocketbaseId;
}
