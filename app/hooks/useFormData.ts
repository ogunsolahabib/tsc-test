import useLocalStorage from "./useLocalStorage";

export default function useFormData() {
    const {storedValue: formDataRaw, setValue: setFormData}=useLocalStorage('tsc-form-data', {});

    const updateFormData = (newData: any) => {
        setFormData({...formData, ...newData});
    }

    const resetFormData = () => {
        setFormData({});
    }

    const formData = JSON.parse(JSON.stringify(formDataRaw));

    return {formData, setFormData, updateFormData, resetFormData};
}