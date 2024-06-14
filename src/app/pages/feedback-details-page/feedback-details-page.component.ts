import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../../assets/data/data.json';
import { ProductRequest, User } from '../../model/product';

interface ProductFeedbackData {
  currentUser: User;
  productRequests: ProductRequest[];
}

@Component({
  selector: 'app-feedback-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-details-page.component.html',
})
export class FeedbackDetailsPageComponent {
  feedback!: ProductRequest;

  constructor() {
    const productFeedbackData = data as ProductFeedbackData;
    this.feedback = productFeedbackData.productRequests[1];
  }
}
