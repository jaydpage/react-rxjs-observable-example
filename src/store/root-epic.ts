import { combineEpics, Epic } from 'redux-observable'
import * as epics from './epics'
import { RootAction } from './root-action'
import { RootState } from './root-reducer'

export type RootEpic = Epic<RootAction, RootAction, RootState>
const allEpics = Array.from(Object.values(epics)).map((epic) => epic)
export const rootEpic = combineEpics<RootEpic>(...allEpics)
