import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Conversion, InsertConversion, CustomUnit, InsertCustomUnit } from "@shared/schema";

export function useConversions() {
  const queryClient = useQueryClient();

  const conversionsQuery = useQuery<Conversion[]>({
    queryKey: ["/api/conversions/recent"],
  });

  const createConversion = useMutation({
    mutationFn: async (conversion: InsertConversion) => {
      const response = await apiRequest("POST", "/api/conversions", conversion);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/conversions"] });
    },
  });

  return {
    conversions: conversionsQuery.data || [],
    isLoading: conversionsQuery.isLoading,
    createConversion: createConversion.mutate,
    isCreating: createConversion.isPending,
  };
}

export function useCustomUnits() {
  const queryClient = useQueryClient();

  const customUnitsQuery = useQuery<CustomUnit[]>({
    queryKey: ["/api/custom-units"],
  });

  const createCustomUnit = useMutation({
    mutationFn: async (unit: InsertCustomUnit) => {
      const response = await apiRequest("POST", "/api/custom-units", unit);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/custom-units"] });
    },
  });

  return {
    customUnits: customUnitsQuery.data || [],
    isLoading: customUnitsQuery.isLoading,
    createCustomUnit: createCustomUnit.mutate,
    isCreating: createCustomUnit.isPending,
  };
}

export function useExchangeRates() {
  const exchangeRatesQuery = useQuery({
    queryKey: ["/api/exchange-rates"],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    rates: exchangeRatesQuery.data || {},
    isLoading: exchangeRatesQuery.isLoading,
  };
}
