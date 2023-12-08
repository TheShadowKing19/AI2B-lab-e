import {Component, OnInit} from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from "../task";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit{
  archive: Task[] = [];
  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit() {
    this.tasksService.index(true).subscribe((tasks) => {
      this.archive = tasks;
    });
  }

  delete(task: Task) {
    this.tasksService.delete(task).subscribe(() => {
      this.ngOnInit();
    });
  }
}
