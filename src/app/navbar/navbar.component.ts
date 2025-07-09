import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    stockFilter: string ="all";
    onToggle: boolean = false;
    
    
    @Output() stockFilterChange = new EventEmitter<string>();

    @Output() searchChange = new EventEmitter<string>();

    onFilterChange() {
      this.stockFilterChange.emit(this.stockFilter);
    }
    
  
}
