import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, MultiDataSet } from 'ng2-charts';

export class ChartModel {
    title: string;

    // Representation of data one or the other.
    datasets?: ChartDataSets[] | SingleDataSet;
    data?: MultiDataSet | SingleDataSet;

    type: ChartType;
    labels: Label[];
    options?: ChartOptions;
    legend?: boolean;
    plugins?: any;
}
