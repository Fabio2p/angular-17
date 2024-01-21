import { TestBed } from '@angular/core/testing';

import { ActionSharedService } from './action-shared.service';

describe('ActionSharedService', () => {
  let service: ActionSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
