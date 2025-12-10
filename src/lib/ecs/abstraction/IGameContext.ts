import { Entity } from "@/lib/ecs/core";
import type { IGroup } from "@/lib/ecs/abstraction";
import type { FilterRequest } from "@/lib/ecs/core";

interface IGameContext {
    createEntity(): Entity;
    getGroup(request: FilterRequest): IGroup;
    getComponentsOfEntity<E>(entity: E, request?: FilterRequest): object[];
}

export type {
    IGameContext
}
