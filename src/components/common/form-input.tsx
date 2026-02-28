import {FieldValues, Path, UseFormReturn} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";


export default function FormInput<T extends FieldValues>(
    {
        form,
        name,
        label,
        placeholder,
        type = "text"
    }: {
        form: UseFormReturn<T>;
        name: Path<T>;
        label: string;
        placeholder?: string;
        type?: string;
    }) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({field: {...rest}}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {type === "TextArea" ? (
                            <Textarea
                                {...rest}
                                placeholder={placeholder}
                                autoComplete="off"
                                required
                                className="resize-none"
                            />
                        ) : (
                            <Input
                                {...rest}
                                type={type}
                                placeholder={placeholder}
                                autoComplete="off"
                                required
                            />
                        )}
                    </FormControl>
                    <FormMessage className="text-xs"/>
                </FormItem>
            )}
        />
    )
}