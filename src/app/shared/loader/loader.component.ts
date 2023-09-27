import { Component, Input } from '@angular/core';
import {
  ConfigurationType,
  Configurations,
  MessageConfig,
} from './loader.model';
import { messagesConfig1, messagesConfig2 } from './mock/messages-config.mock';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() config?: ConfigurationType;
  @Input() messageChangeTime: number = 3;
  messagesLoader?: MessageConfig;

  private clearTimer: VoidFunction | undefined;

  ngOnInit(): void {
    this.getRandomMessage();
    this.getMessageEveryInterval();
  }

  ngOnDestroy(): void {
    this.clearTimer?.();
  }

  getRandomMessage(): void {
    const configMessageList =
      this.config === Configurations.FirstConfig
        ? messagesConfig1
        : messagesConfig2;

    const randomIndex = Math.floor(Math.random() * configMessageList.length);

    this.messagesLoader = configMessageList[randomIndex];
  }

  getMessageEveryInterval(): void {
    const interval = setInterval(() => {
      this.getRandomMessage();
    }, 1000 * this.messageChangeTime);

    this.clearTimer = () => clearInterval(interval);
  }
}
