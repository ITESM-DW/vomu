import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  page=1
  pageSize=4
  stories = [
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women2.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women3.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women1.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women2.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women3.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women1.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women2.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women3.jpg'
    },
    {
      title: 'Some title',
      author: 'Marie Curie',
      text: 'Exercitation tempor consectetur aute nostrud quis proident laboris irure exercitation officia officia. Voluptate tempor culpa voluptate ut eiusmod non enim magna elit culpa duis laboris Lorem ex. Cupidatat consequat exercitation dolor pariatur consequat et aliquip aliqua in aliqua. Nulla excepteur eu non ipsum tempor cillum aute pariatur qui id anim minim quis. Velit magna do elit proident Lorem labore irure nisi ut dolore do velit culpa amet. Ex aute cillum pariatur adipisicing minim minim cupidatat. Nisi minim Lorem proident irure et do incididunt culpa ullamco in dolore sit ea.',
      imgUrl: 'assets/images/women1.jpg'
    }
  ]
  pagination
  constructor() { }

  ngOnInit(): void {
    this.pagination = this.stories.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  onPageChange(page: number) {
    this.page = page;
    this.loadData();
  }

  loadData() {
    this.pagination = this.stories.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }
}
