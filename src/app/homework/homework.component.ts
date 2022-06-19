import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  array = [
    'Іван Марчук',
    'Михайло Врубель (1856–1910)',
    'Микола Пимоненко (1862–1912)',
    'Казимир Северинович Малевич (1878–1935)',
    'Василь Іванович Лопата (28 квітня 1941)',
    'Олександр Ройтбурд',
    'Олег Тістол',
    'Анатолій Криволап',
    'Ілля Чічкан',
    'Віктор Сидоренко'
  ]
  
  elementText: any;
  colorParagraph: any;

  showItem(event: Event) {
    const element = event.target as HTMLElement;
    this.elementText = element.textContent;
  }

  addColor(event: Event) {
    const element = event.target as HTMLElement;
    this.colorParagraph = element.id;
  }

  remove(event: Event) {
    const element = event.target as HTMLElement;
    element.remove();
  }

  text = "Наша дума, наша пісня Не вмре, не загине… Ось де, люде, наша слава, Слава України!";
  actualDate = new Date();
  percent = Math.random();
  number = Math.floor(Math.random() * (1000000 - 1000) + 1000);
  decimal = this.percent + this.number;

  ngOnInit(): void {
  }

}
