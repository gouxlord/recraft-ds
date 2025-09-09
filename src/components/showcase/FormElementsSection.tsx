import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import Select from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Switch } from '../ui/switch';
import { RadioGroup, RadioOption } from '../ui/radio';
import DatePicker from '../ui/date-picker';
import FileUpload from '../ui/file-upload';

const FormElementsSection = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [checkedState, setCheckedState] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [uploadedFiles, setUploadedFiles] = useState<File[] | null>(null);

  // Use uploadedFiles to avoid unused variable error
  console.log('Uploaded files:', uploadedFiles);

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Éléments de formulaire</h2>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Input</label>
            <Input placeholder="Entrez du texte..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Input with error</label>
            <Input placeholder="Email invalide" error />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select</label>
            <Select 
              options={selectOptions}
              value={selectedValue}
              onChange={setSelectedValue}
              placeholder="Choisir une option"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox 
                checked={checkedState}
                onCheckedChange={setCheckedState}
              />
              <label className="text-sm text-gray-700">Checkbox</label>
            </div>
            <div className="flex items-center gap-2">
              <Switch 
                checked={switchState}
                onCheckedChange={setSwitchState}
              />
              <label className="text-sm text-gray-700">Switch</label>
            </div>
          </div>
          
          {/* Radio Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Radio Group</label>
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <RadioOption 
                value="option1" 
                label="Option 1" 
                description="Description de l'option 1" 
              />
              <RadioOption 
                value="option2" 
                label="Option 2" 
                description="Description de l'option 2" 
              />
              <RadioOption 
                value="option3" 
                label="Option 3" 
              />
            </RadioGroup>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Picker</label>
            <DatePicker 
              value={selectedDate}
              onChange={(date: Date) => setSelectedDate(date)}
              placeholder="Choisir une date"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
            <FileUpload
              onFileSelect={(files: File | File[] | null) => {
                if (Array.isArray(files)) {
                  setUploadedFiles(files);
                } else if (files) {
                  setUploadedFiles([files]);
                } else {
                  setUploadedFiles(null);
                }
              }}
              accept="image/*,.pdf,.doc,.docx"
              multiple={true}
              maxSize={5 * 1024 * 1024} // 5MB
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FormElementsSection;