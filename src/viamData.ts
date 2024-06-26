import { Field, FieldType } from '@grafana/data';

/*
 * buildFramesFields
 * Take the Viam query result and turn it into Grafana Fields
 */
export const buildFrameFields = (resultSet:any[], includeNonNumbers = false) => {
    let fields: Field[] = [];
    if (resultSet.length > 0) {
        fields.push({ name: 'timeRequested', values: [], type: FieldType.time, config: {} })
        fields.push({ name: 'timeReceived', values: [], type: FieldType.time, config: {} })
        fields.push({name: "metadata", values: [], type: FieldType.string, config: {}})
        fields.push({name: "data", values: [], type: FieldType.string, config: {}})

        resultSet.forEach((dataItem: { [key: string]: any }): void => {
            fields[0].values.push(new Date(dataItem['timeRequested']).toISOString());
            fields[1].values.push(new Date(dataItem['timeReceived']).toISOString());
            fields[2].values.push(dataItem['metadata']);
            fields[3].values.push(dataItem["data"])
        });
    }
    return fields;
}
