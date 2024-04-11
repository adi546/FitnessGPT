import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent 
{
  autoResize(element: any) {
    element.style.height = "auto"; // Reset the height to auto
    element.style.height = (element.scrollHeight) + "px"; // Set the height based on the scroll height
  }

  inputData: string | undefined;

  constructor(private apiService: ApiService) { }

  sendQuestion(): void {
    if (this.inputData) {
      this.apiService.sendQuestionToAPI({ question: this.inputData }).subscribe(response => {
        // Handle the response if needed
        console.log(response);
      });
    }
  }
}
