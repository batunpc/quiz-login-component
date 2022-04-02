import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

export class User {
  userName: string = "";
  password: string = "";
}

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  userData: User = new User();

  ngOnInit(): void {
    this.userData = {
      userName: "bob",
      password: "myPassword",
    };
  }
  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      if (
        this.userData.userName === "bob" &&
        this.userData.password === "myPassword"
      ) {
        this.router.navigate(["/contact-us"]);
      } else {
        alert("Entered credentials are wrong");
      }
    }
  }
}
