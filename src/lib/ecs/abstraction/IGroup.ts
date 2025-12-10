import { Entity } from "@/lib/ecs/core";

interface IGroup {
    getEntities(): Entity[]
}

export type {
    IGroup
}
