import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as dayjs from 'dayjs';

import { DATE_FORMAT } from 'app/config/input.constants';
import { ITask, Task } from '../task.model';

import { TaskService } from './task.service';

describe('Service Tests', () => {
  describe('Task Service', () => {
    let service: TaskService;
    let httpMock: HttpTestingController;
    let elemDefault: ITask;
    let expectedResult: ITask | ITask[] | boolean | null;
    let currentDate: dayjs.Dayjs;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      service = TestBed.inject(TaskService);
      httpMock = TestBed.inject(HttpTestingController);
      currentDate = dayjs();

      elemDefault = {
        id: 'AAAAAAA',
        name: 'AAAAAAA',
        dueDate: currentDate,
        completed: false,
      };
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dueDate: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find('ABC').subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Task', () => {
        const returnedFromService = Object.assign(
          {
            id: 'ID',
            dueDate: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dueDate: currentDate,
          },
          returnedFromService
        );

        service.create(new Task()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Task', () => {
        const returnedFromService = Object.assign(
          {
            id: 'BBBBBB',
            name: 'BBBBBB',
            dueDate: currentDate.format(DATE_FORMAT),
            completed: true,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dueDate: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should partial update a Task', () => {
        const patchObject = Object.assign(
          {
            completed: true,
          },
          new Task()
        );

        const returnedFromService = Object.assign(patchObject, elemDefault);

        const expected = Object.assign(
          {
            dueDate: currentDate,
          },
          returnedFromService
        );

        service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PATCH' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Task', () => {
        const returnedFromService = Object.assign(
          {
            id: 'BBBBBB',
            name: 'BBBBBB',
            dueDate: currentDate.format(DATE_FORMAT),
            completed: true,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dueDate: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Task', () => {
        service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });

      describe('addTaskToCollectionIfMissing', () => {
        it('should add a Task to an empty array', () => {
          const task: ITask = { id: 'ABC' };
          expectedResult = service.addTaskToCollectionIfMissing([], task);
          expect(expectedResult).toHaveLength(1);
          expect(expectedResult).toContain(task);
        });

        it('should not add a Task to an array that contains it', () => {
          const task: ITask = { id: 'ABC' };
          const taskCollection: ITask[] = [
            {
              ...task,
            },
            { id: 'CBA' },
          ];
          expectedResult = service.addTaskToCollectionIfMissing(taskCollection, task);
          expect(expectedResult).toHaveLength(2);
        });

        it("should add a Task to an array that doesn't contain it", () => {
          const task: ITask = { id: 'ABC' };
          const taskCollection: ITask[] = [{ id: 'CBA' }];
          expectedResult = service.addTaskToCollectionIfMissing(taskCollection, task);
          expect(expectedResult).toHaveLength(2);
          expect(expectedResult).toContain(task);
        });

        it('should add only unique Task to an array', () => {
          const taskArray: ITask[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: '26fc9c9e-8ccb-4664-9f17-d1ab2d9db917' }];
          const taskCollection: ITask[] = [{ id: 'ABC' }];
          expectedResult = service.addTaskToCollectionIfMissing(taskCollection, ...taskArray);
          expect(expectedResult).toHaveLength(3);
        });

        it('should accept varargs', () => {
          const task: ITask = { id: 'ABC' };
          const task2: ITask = { id: 'CBA' };
          expectedResult = service.addTaskToCollectionIfMissing([], task, task2);
          expect(expectedResult).toHaveLength(2);
          expect(expectedResult).toContain(task);
          expect(expectedResult).toContain(task2);
        });

        it('should accept null and undefined values', () => {
          const task: ITask = { id: 'ABC' };
          expectedResult = service.addTaskToCollectionIfMissing([], null, task, undefined);
          expect(expectedResult).toHaveLength(1);
          expect(expectedResult).toContain(task);
        });

        it('should return initial array if no Task is added', () => {
          const taskCollection: ITask[] = [{ id: 'ABC' }];
          expectedResult = service.addTaskToCollectionIfMissing(taskCollection, undefined, null);
          expect(expectedResult).toEqual(taskCollection);
        });
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
