import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BadButtonComponent } from '../bad-button/bad-button.component';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  template: `
    <main style="padding: 60px 40px 40px 40px; background-color: #f1f1f1">
      <div class="columns">
        <div class="column is-one-third">
          <h1 id="target" tabindex="-1" focus>
            Contact
          </h1>
        </div>
        <div class="column is-two-thirds" style="margin-top: 5px;">
          <p style="margin-bottom:40px;">We are here to help and love hearing from existing and prospective customers alike. If you cannot find the information you are looking for in the FAQ below, please contact us via the message box. This will beam your inquiry directly to our support team, and will be fielded within 24 hours. We may even surprise you and respond much quicker.</p>

          <hr aria-hidden="true" style="margin: 0 20px; border-bottom: solid 1px #dddddd; color: #666666;">

          <h2 id="contact-heading" style="margin: 40px 0 20px; font-size: 18px; line-height: 24px; font-weight: 400;">Contact Form</h2>

          <div #errorContainer id="error-summary-container" class="card" tabindex="-1">
            <p class="card-content">Please correct the fields in error below.</p>
          </div>

          <p style="margin-bottom: 18px; padding-left: 20px">(All fields are required)</p>

          <form id="contact-form">
            <div class="columns">
              <div class="column is-half">
                <label for="first-name">First Name</label><br>
                <input id="first-name" type="text" class="input" required="true" placeholder="First Name">
              </div>
              <div class="column is-half">
                <label for="last-name">Last Name</label><br>
                <input id="last-name" type="text" class="input" required="true" placeholder="Last Name">
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <label for="email">Email</label><br>
                <input id="email" type="text" class="input" required="true" placeholder="Email Address"></div>
              <div class="column is-half">
                <label for="order-number">Order Number</label><br>
                <input id="order-number" type="text" class="input" required="true" placeholder="Order Number"></div>
            </div>
              <label for="message-subject">Message Subject</label><br>
            <input id="message-subject" type="text" class="input" required="true" placeholder="Message Subject" style="margin-bottom:24px;">

            <label for="message-body">Message Body</label><br>
            <textarea id="message-body" class="textarea" required="true" placeholder="Enter your message..." style="margin-bottom: 24px;"></textarea>

            <bad-button id="clear-form-button" class="form-button" (click)="clearForm()" [badLabel]="badLabel"></bad-button>
            <accessible-button (click)="focusError()" [goodLabel]="goodLabel"></accessible-button>
            <!-- <button type="button" id="send-form-button" class="form-button" style="float:right" (click)="focusError()">Send</button> -->
          </form>
          

        </div>
      </div>
    </main>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor( private titleService: Title, private router: Router) { }

  title = "Contact - TP Depot"

  // Focus the error summary container on Send click
    // https://codeburst.io/focusing-on-form-elements-the-angular-way-e9a78725c04f

  @ViewChild("errorContainer") errorContainer: ElementRef;

  focusError() {
    this.errorContainer.nativeElement.style.display = "block";
    this.errorContainer.nativeElement.focus();
  }

  clearForm() {
    // add this functionality
  }

  // Custom Button
  goodLabel = "Send";
  badLabel = "Clear";

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
