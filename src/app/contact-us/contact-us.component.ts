import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

export class Contact {
  name: string = "";
  email: string = "";
  message: string = "";
}

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  constructor() {}
  blankError: string = "";
  contactData: Contact = new Contact();

  ngOnInit(): void {
    this.contactData = {
      name: "",
      email: "",
      message: "",
    };
  }

  onSubmit(contactForm: NgForm): void {
    Object.values(contactForm.value).forEach((input) => {
      if (input != "") {
        console.log("form submitted");
      } else {
        this.blankError = "fill out the fields";
      }
    });
  }
}
