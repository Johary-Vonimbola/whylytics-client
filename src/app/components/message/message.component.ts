import { Component, Input } from '@angular/core';
import { Message } from '../../models/Message';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [ NgClass ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input({
    required: true
  }) message!: Message;

}
