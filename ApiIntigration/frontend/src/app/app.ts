import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 REQUIRED
import { Passport, PassportServices } from './services/passport.services';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',

  imports: [CommonModule, ReactiveFormsModule]
})
export class App implements OnInit {

  passportForm!: FormGroup;
  passports: Passport[] = [];
  selectedId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private service: PassportServices
  ) {}

  ngOnInit() {
    this.passportForm = this.fb.group({
      holderName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });

    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(data => {
      this.passports = data;
    });
  }

  onSubmit() {
    if (this.passportForm.invalid) return;

    const data = this.passportForm.value;

    if (this.selectedId) {
      data.passportId = this.selectedId;
      this.service.update(this.selectedId, data).subscribe(() => {
        this.resetForm();
        this.loadData();
      });
    } else {
      this.service.create(data).subscribe(() => {
        this.resetForm();
        this.loadData();
      });
    }
  }

  edit(id: number) {
    this.service.getById(id).subscribe(data => {
      this.passportForm.patchValue(data);
      this.selectedId = id;
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.loadData());
  }

  resetForm() {
    this.passportForm.reset();
    this.selectedId = null;
  }
}