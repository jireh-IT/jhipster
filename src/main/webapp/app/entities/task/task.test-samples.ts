import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 22472,
  dueDate: dayjs('2023-08-23'),
  completed: true,
};

export const sampleWithPartialData: ITask = {
  id: 5645,
  dueDate: dayjs('2023-08-23'),
  completed: true,
};

export const sampleWithFullData: ITask = {
  id: 11907,
  name: 'Infrastructure Palladium',
  dueDate: dayjs('2023-08-24'),
  completed: false,
};

export const sampleWithNewData: NewTask = {
  dueDate: dayjs('2023-08-24'),
  completed: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
