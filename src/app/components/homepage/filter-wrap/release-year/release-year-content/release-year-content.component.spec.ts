import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseYearContentComponent } from './release-year-content.component';

describe('ReleaseYearContentComponent', () => {
    let component: ReleaseYearContentComponent;
    let fixture: ComponentFixture<ReleaseYearContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReleaseYearContentComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReleaseYearContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
