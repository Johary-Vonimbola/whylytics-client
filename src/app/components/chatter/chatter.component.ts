import { AfterViewChecked, Component, ElementRef, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { Message } from '../../models/Message';
import { MessageComponent } from '../message/message.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chatter',
  imports: [
    MessageComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './chatter.component.html',
  styleUrl: './chatter.component.scss'
})
export class ChatterComponent implements AfterViewChecked{
  @ViewChild('msgContainer') private msgContainer!: ElementRef;
  messages: Message[] = [
    new Message(false, "Hello there"),
    new Message(true, "Hello there"),
    new Message(false, "Hello there"),
    new Message(true, "Hello there"),
    new Message(false, "Hello there"),
    new Message(false, "Hello there"),
  ];
  isOpen: WritableSignal<boolean> = signal<boolean>(false);

  fb = inject(FormBuilder);
  form = this.fb.group({
    message: new FormControl('', [Validators.required])
  });
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.msgContainer.nativeElement.scrollTop = this.msgContainer.nativeElement.scrollHeight;
  }

  toggle(){
    this.isOpen.set(!this.isOpen());
  }

  send(){
    if(!this.form.invalid){
      this.messages.push(
        new Message(true, this.form.controls.message.value ?? '')
      );
      this.form.controls.message.setValue('');
    }
  }

}
