class User {
  int? id;
  String? username;
  String? email;
  List<dynamic>? roles;
  String? accessToken;

  User({this.id, this.username, this.email, this.roles, this.accessToken});

  User.fromJson(dynamic json) {
    id = json["id"];
    username = json["username"];
    email = json["email"];
    roles = json["roles"];
    accessToken = json["accessToken"];
  }

  Map<String, dynamic> toJson() {
    var map = <String, dynamic>{};
    map["id"] = id;
    map["username"] = username;
    map["email"] = email;
    map["roles"] = roles;
    map["accessToken"] = accessToken;
    return map;
  }
}
