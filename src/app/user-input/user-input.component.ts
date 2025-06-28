import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService){}

  onSumbit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    });
    
    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.enteredDuration = '10';
    this.enteredExpectedReturn = '5';

  }
}
