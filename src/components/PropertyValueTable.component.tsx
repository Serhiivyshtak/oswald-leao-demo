// External packages
import {t} from 'i18next';
import {type JSX} from 'react';

// Custom types
import type {AnyTableObjectType} from '../types/AnyTableObject.type';
import type {PropertyValueTableItemObjectType} from '../types/PropertyValueTableItemObject.type';
import {PropertyValueTableItemComponent} from './PropertyValueTableItem.component';


export function PropertyValueTableComponent({tableDataLocation, className}: AnyTableObjectType): JSX.Element {
    const tableData = t(tableDataLocation, {returnObjects: true}) as Array<PropertyValueTableItemObjectType>;


    function renderTableItems(): JSX.Element[] {
        return tableData.map(tableItem => {
            return (
                <PropertyValueTableItemComponent 
                    key={tableItem.id} 
                    id={tableItem.id} 
                    property={tableItem.property} 
                    value={tableItem.value} 
                    imageSrc={tableItem.imageSrc} 
                />
            )
        });
    }


    return (
        <div className={className}>
            {renderTableItems()}
        </div>
    );
}