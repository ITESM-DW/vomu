import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/modules/professor/models/CourseModel';
import { CourseService } from 'src/app/modules/user/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-course-view',
  templateUrl: './general-course-view.component.html',
  styleUrls: ['./general-course-view.component.scss']
})
export class GeneralCourseViewComponent implements OnInit {
  course: CourseModel;
  constructor(private courseService: CourseService, private route: ActivatedRoute ) { 
  }

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('course_id'));

    this.course = this.courseService.getCourse(courseId);
  }

}
