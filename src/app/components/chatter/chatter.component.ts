import { AfterViewChecked, Component, ElementRef, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { Message } from '../../models/Message';
import { MessageComponent } from '../message/message.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AiService } from '../../services/ai.service';

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
  private aiService: AiService = inject(AiService);
  @ViewChild('msgContainer') private msgContainer!: ElementRef;
  messages: Message[] = [
    new Message(false, "Bonjour, je suis votre assistant IA"),
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
      const prompt = this.form.controls.message.value ?? '';
      this.form.controls.message.setValue('');

      this.aiService.sendPrompt(prompt).subscribe(res => {
        setTimeout(() => {
          this.messages.push(
            new Message(false, res)
          );
        }, 1000);
      });
    }
  }

}
