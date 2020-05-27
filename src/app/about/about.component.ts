import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  template: `
    <main style="padding: 60px 40px 40px 40px; background-color: #f1f1f1">
      <div class="columns">
        <div class="column is-one-third">
          <h1 id="target" tabindex="-1" focus>
            About
          </h1>
        </div>
        <div class="column is-two-thirds" style="margin-top: 5px;">
          <p>There is literally so much to be said about this company that I don't know where to start. I mean, is there something you want to know? Because I'm an open book. It's cool if you want to ask. Like, really, anything. You just say the word. You: question, me: answer. Boom.</p>

          <h2 id="about-heading">Possible topics of conversation:</h2>
          <ul class="list" style="max-width:600px;">
            <li class="list-item">What is the point of the company?</li>
            <li class="list-item">How many employees are there?</li>
            <li class="list-item">What happens if the head of the company dies? Is there a successor, like a royal lineage? Is there a executive-branch-vice-president situation? I just want to know if we should be worried.</li>
          </ul>
        </div>
      </div>

      
    </main>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor( private titleService: Title ) { }

  title = "About - TP Depot";

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
