import type { FilterType } from "@/lib/ecs/core";

interface FilterRequest {
    operator: FilterType;
    types: string[];
}

export type {
    FilterRequest
}
