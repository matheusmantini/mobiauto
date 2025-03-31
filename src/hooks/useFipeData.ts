import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { setBrand, setModel, setYear } from "@/store/fipeSlice";
import { iAutocompleteOptions } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "@/hooks/useFetchData";
import { RootState, AppDispatch } from "@/store/store";

export const useFipeData = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { selectedBrand, selectedModel, selectedYear } = useSelector(
    (state: RootState) => state.fipe
  );

  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [brandsData, brandsLoading, brandsError] = useFetchData<
    iAutocompleteOptions[]
  >(`${baseUrl}`);

  const modelsUrl = selectedBrand
    ? `${baseUrl}/${selectedBrand}/modelos`
    : null;

  const [modelsResponse, modelsLoading, modelsError] = useFetchData<{
    modelos: iAutocompleteOptions[];
  }>(modelsUrl);

  const yearsUrl =
    selectedBrand && selectedModel
      ? `${baseUrl}/${selectedBrand}/modelos/${selectedModel}/anos`
      : null;
  const [yearsData, yearsLoading, yearsError] =
    useFetchData<iAutocompleteOptions[]>(yearsUrl);

  const loading = {
    brand: brandsLoading,
    model: modelsLoading,
    year: yearsLoading,
  };

  const error = brandsError || modelsError || yearsError;

  const handleBrandChange = useCallback(
    (_: unknown, value: iAutocompleteOptions | null) => {
      dispatch(setBrand(value?.codigo || null));
      dispatch(setModel(null));
      dispatch(setYear(null));
    },
    [dispatch]
  );

  const handleModelChange = useCallback(
    (_: unknown, value: iAutocompleteOptions | null) => {
      dispatch(setModel(value?.codigo || null));
      dispatch(setYear(null));
    },
    [dispatch]
  );

  const handleYearChange = useCallback(
    (_: unknown, value: iAutocompleteOptions | null) => {
      dispatch(setYear(value?.codigo || null));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    if (selectedBrand && selectedModel && selectedYear) {
      router.push(
        `/resultado/${selectedBrand}/${selectedModel}/${selectedYear}`
      );
    }
  }, [router, selectedBrand, selectedModel, selectedYear]);

  return {
    brand: brandsData || [],
    model: modelsResponse?.modelos || [],
    year: yearsData || [],
    selectedBrand,
    selectedModel,
    selectedYear,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
    handleSubmit,
    loading,
    error,
  };
};
