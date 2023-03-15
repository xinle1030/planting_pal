import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:planting_pal/models/user.dart';
import '../../../constants.dart';
import '../../../home.dart';
import 'package:http/http.dart' as http;

class LoginForm extends StatefulWidget {
  const LoginForm({
    Key? key,
  }) : super(key: key);

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final emailController = TextEditingController();
  final psdController = TextEditingController();

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    emailController.dispose();
    psdController.dispose();

    super.dispose();
  }

  Future<void> login(email, password) async {
    final url = "http://127.0.0.1:8080/api/auth/signin";

    print(email);
    print(password);

    try {
      http.Response response;
      response = await http.post(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode({
          'email': email,
          'password': password,
        }),
      );
      print(response);
      print(response.body);
      final data = User.fromJson(jsonDecode(response.body));
      if (response.statusCode == 200) {
        print(data);
        // Navigator.push(
        //   context,
        //   MaterialPageRoute(builder: (context) => const Home()),
        // );
      } else {
        print(response.statusCode);
      }
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Column(
        children: [
          TextFormField(
            controller: emailController,
            keyboardType: TextInputType.emailAddress,
            textInputAction: TextInputAction.next,
            cursorColor: kPrimaryColor,
            decoration: InputDecoration(
              hintText: "Email",
              prefixIcon: Padding(
                padding: const EdgeInsets.all(defaultPadding),
                child: Icon(Icons.person),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: defaultPadding),
            child: TextFormField(
              controller: psdController,
              textInputAction: TextInputAction.done,
              obscureText: true,
              cursorColor: kPrimaryColor,
              decoration: InputDecoration(
                hintText: "Password",
                prefixIcon: Padding(
                  padding: const EdgeInsets.all(defaultPadding),
                  child: Icon(Icons.lock),
                ),
              ),
            ),
          ),
          const SizedBox(height: defaultPadding),
          Hero(
            tag: "login_btn",
            child: ElevatedButton(
              onPressed: () {
                login(emailController.text, psdController.text);
              },
              child: Text(
                "Login".toUpperCase(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
