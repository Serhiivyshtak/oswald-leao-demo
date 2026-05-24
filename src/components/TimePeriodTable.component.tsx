// External packages
import type {JSX} from 'react';
import {t} from 'i18next';

// Custom types
import type {AnyTableObjectType} from '../types/AnyTableObject.type';
import type {TimePeroidTableItemObjectType} from '../types/TimePeriodTableItemObject.type';
import {TimePeriodTableItemComponent} from './TimePeriodTableItem.component';


export function TimePeriodTableComponent({tableDataLocation}: AnyTableObjectType): JSX.Element {
    const tableData = t(tableDataLocation, {returnObjects: true}) as Array<TimePeroidTableItemObjectType>;


    function renderTableItems(): JSX.Element[] {
        return tableData.map(tableItem => {
            return (
                <TimePeriodTableItemComponent 
                    key={tableItem.id}
                    id={tableItem.id} 
                    timePeriod={tableItem.timePeriod} 
                    heading={tableItem.heading} 
                    subheading={tableItem.subheading} 
                />
            );
        });
    }


    return (
        <div>
            {renderTableItems()}
        </div>
    );
}