class Order {
  int? orderId;
  String? orderDate;
  int? userId;
  String? nameOfBuyer;
  String? receiverName;
  String? receiverEmail;
  String? greetings;
  bool? treeCoordinatesRequired;
  String? treeCoordinates;
  int? numberOfTrees;
  String? amountReceived;
  String? countryOfOrigin;
  String? orderStatus;
  String? pdfLink;
  String? certLink;
  String? photoLink;
  String? updatedAt;
  bool? checked;

  Order(
      {this.orderId,
      this.orderDate,
      this.userId,
      this.nameOfBuyer,
      this.receiverName,
      this.receiverEmail,
      this.greetings,
      this.treeCoordinatesRequired,
      this.treeCoordinates,
      this.numberOfTrees,
      this.amountReceived,
      this.countryOfOrigin,
      this.orderStatus,
      this.pdfLink,
      this.certLink,
      this.photoLink,
      this.updatedAt});

  Order.fromJson(dynamic json) {
    orderId = json["orderId"];
    orderDate = json["orderDate"];
    userId = json["userId"];
    nameOfBuyer = json["nameOfBuyer"];
    receiverName = json["receiverName"];
    receiverEmail = json["receiverEmail"];
    greetings = json["greetings"];
    treeCoordinatesRequired = json["treeCoordinatesRequired"];
    treeCoordinates = json["treeCoordinates"];
    numberOfTrees = json["numberOfTrees"];
    amountReceived = json["amountReceived"];
    countryOfOrigin = json["countryOfOrigin"];
    orderStatus = json["orderStatus"];
    pdfLink = json["pdfLink"];
    certLink = json["certLink"];
    photoLink = json["photoLink"];
    updatedAt = json["updatedAt"];
  }

  Order.fromCheckedJson(dynamic json) {
    orderId = json["orderId"];
    orderDate = json["orderDate"];
    userId = json["userId"];
    nameOfBuyer = json["nameOfBuyer"];
    receiverName = json["receiverName"];
    receiverEmail = json["receiverEmail"];
    greetings = json["greetings"];
    treeCoordinatesRequired = json["treeCoordinatesRequired"];
    treeCoordinates = json["treeCoordinates"];
    numberOfTrees = json["numberOfTrees"];
    amountReceived = json["amountReceived"];
    countryOfOrigin = json["countryOfOrigin"];
    orderStatus = json["orderStatus"];
    pdfLink = json["pdfLink"];
    certLink = json["certLink"];
    photoLink = json["photoLink"];
    updatedAt = json["updatedAt"];
    checked = false;
  }

  Map<String, dynamic> toJson() {
    var map = <String, dynamic>{};
    map["orderId"] = orderId;
    map["orderDate"] = orderDate;
    map["userId"] = userId;
    map["nameOfBuyer"] = nameOfBuyer;
    map["receiverName"] = receiverName;
    map["receiverEmail"] = receiverEmail;
    map["greetings"] = greetings;
    map["treeCoordinatesRequired"] = treeCoordinatesRequired;
    map["treeCoordinates"] = treeCoordinates;
    map["numberOfTrees"] = numberOfTrees;
    map["amountReceived"] = amountReceived;
    map["countryOfOrigin"] = countryOfOrigin;
    map["orderStatus"] = orderStatus;
    map["pdfLink"] = pdfLink;
    map["certLink"] = certLink;
    map["photoLink"] = photoLink;
    map["updatedAt"] = updatedAt;
    return map;
  }

  Map<String, dynamic> toCheckedJson() {
    var map = <String, dynamic>{};
    map["orderId"] = orderId;
    map["orderDate"] = orderDate;
    map["userId"] = userId;
    map["nameOfBuyer"] = nameOfBuyer;
    map["receiverName"] = receiverName;
    map["receiverEmail"] = receiverEmail;
    map["greetings"] = greetings;
    map["treeCoordinatesRequired"] = treeCoordinatesRequired;
    map["treeCoordinates"] = treeCoordinates;
    map["numberOfTrees"] = numberOfTrees;
    map["amountReceived"] = amountReceived;
    map["countryOfOrigin"] = countryOfOrigin;
    map["orderStatus"] = orderStatus;
    map["pdfLink"] = pdfLink;
    map["certLink"] = certLink;
    map["photoLink"] = photoLink;
    map["updatedAt"] = updatedAt;
    map["checked"] = checked;
    return map;
  }
}
