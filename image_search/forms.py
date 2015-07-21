from django import forms

class image_upload_form(forms.Form):
    image = forms.ImageField(
                             label="Choose a file " 
                             )

    def __init__(self, *args, **kwargs):
        super(image_upload_form, self).__init__(*args, **kwargs)
        self.fields['image'].widget.attrs.update({'class': 'field'})