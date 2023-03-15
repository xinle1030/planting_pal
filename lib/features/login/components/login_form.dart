import 'dart:async';
import 'dart:convert';
import 'package:planting_pal/config/responsive.dart';
import 'package:flutter/material.dart';
import 'package:planting_pal/features/login/login_screen.dart';
import 'package:planting_pal/models/user.dart';
import 'package:planting_pal/providers/loading_provider.dart';
import 'package:provider/provider.dart';
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

  @override
  Widget build(BuildContext context) {
    final loadingProvider =
        Provider.of<LoadingProvider>(context, listen: false);

    Future<User?> _futureUser;

    Future<User?> login(email, password) async {
      final url = "http://127.0.0.1:8080/api/auth/signin";

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
      if (response.statusCode == 200) {
        loadingProvider.setLoading(false);
        return User.fromJson(jsonDecode(response.body));
      } else {
        loadingProvider.setLoading(false);
      }
    }

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
                loadingProvider.setLoading(true);
                _futureUser = login(emailController.text, psdController.text);
                Navigator.pushNamed(context, Home.id);
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
