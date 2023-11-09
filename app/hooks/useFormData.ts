import useLocalStorage from "./useLocalStorage";


interface NominationFormData {
    nominee_id?: string;
    first_name?: string;
    reason?: string;
    rating?: string;
}
export default function useFormData() {
    const {storedValue: formDataRaw, setValue}=useLocalStorage('tsc-form-data', {});

    const setFormData = (data: NominationFormData) => {
        setValue(data);
    }

    const updateFormData = (newData: NominationFormData) => {
        setFormData({...formData, ...newData});
    }

    const resetFormData = () => {
        setFormData({});
    }

    const formData = JSON.parse(JSON.stringify(formDataRaw));

    return {formData, setFormData, updateFormData, resetFormData};
}