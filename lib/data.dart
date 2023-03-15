import 'package:flutter/material.dart';
import 'package:planting_pal/style/colors.dart';

const recentActivities = [
  {"icon": 'assets/drop.svg', "label": 'Water Bill', "amount": "\$120"},
  {"icon": 'assets/salary.svg', "label": 'Income Salary', "amount": "\$4500"},
  {
    "icon": 'assets/electricity.svg',
    "label": 'Electric Bill',
    "amount": "\$150"
  },
  {"icon": 'assets/wifi.svg', "label": 'Internet Bill', "amount": "\$60"},
];

const upcomingPayments = [
  {"icon": 'assets/home.svg', "label": 'Home Rent', "amount": "\$1500"},
  {"icon": 'assets/salary.svg', "label": 'Car Insurance', "amount": "\$150"},
];

const transactionHistory = [
  {
    "avatar":
        'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
    "label": 'Car Insurance',
    "amount": "\$350",
    "time": "10:42:23 AM",
    "status": "Completed",
  },
  {
    "avatar":
        'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
    "label": 'Loan',
    "amount": "\$350",
    "time": "12:42:00 PM",
    "status": "Completed",
  },
  {
    "avatar":
        'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
    "label": 'Online Payment',
    "amount": "\$154",
    "time": "10:42:23 PM",
    "status": "Completed",
  },
];

List<dynamic> orderData = [
  {
    "orderDate": "1/3/2022",
    "orderId": "1",
    "userId": '1',
    "nameOfBuyer": "buyer1",
    "receiverName": "receiver1",
    "receiverEmail": "receiver1@gmail.com",
    "treeCoordinates": "(128, 128)",
    "countryOfOrigin": "Malaysia",
    "numberOfTrees": 1,
    "treeCoordinatesRequired": true,
    "amountReceived": 10,
    "pdfLink": "pdf1",
    "checked": false,
    "updatedAt": "now"
  },
  {
    "orderDate": "2/3/2022",
    "orderId": "2",
    "userId": "2",
    "nameOfBuyer": "buyer2",
    "receiverName": "receiver2",
    "receiverEmail": "receiver2@gmail.com",
    "treeCoordinates": "(128, 128)",
    "countryOfOrigin": "Malaysia",
    "numberOfTrees": 2,
    "treeCoordinatesRequired": false,
    "amountReceived": 20,
    "pdfLink": "pdf2",
    "checked": false,
    "updatedAt": "now"
  },
  {
    "orderDate": "3/3/2022",
    "orderId": "3",
    "userId": "3",
    "nameOfBuyer": "buyer3",
    "receiverName": "receiver3",
    "receiverEmail": "receiver3@gmail.com",
    "treeCoordinates": "(128, 128)",
    "treeCoordinatesRequired": true,
    "countryOfOrigin": "Malaysia",
    "numberOfTrees": 3,
    "amountReceived": 30,
    "pdfLink": "pdf3",
    "checked": false,
    "updatedAt": "now"
  },
];
