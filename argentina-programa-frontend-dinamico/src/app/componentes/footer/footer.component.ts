import { Component } from '@angular/core';
import { faFacebook, faDiscord, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

faFacebook = faFacebook;
faDiscord = faDiscord;
faGithub = faGithub;
faGoogle = faGoogle;
}
