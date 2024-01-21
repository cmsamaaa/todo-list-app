import { ListSection } from '../model/json.model';
import { loadJson } from './json.util';

const jsonFilePath = '/data/list.json';


export const loadList = async (): Promise<ListSection> => {
    return await loadJson(jsonFilePath);
}