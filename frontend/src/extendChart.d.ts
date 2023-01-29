// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChartTypeRegistry } from 'chart.js';

declare module 'chart.js' {
    export interface ChartTypeRegistry {
        eventLabels: ChartTypeRegistry['BarElement'],
        eventData: ChartTypeRegistry['BarElement']
    }
}
 