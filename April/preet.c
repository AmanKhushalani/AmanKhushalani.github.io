#include<stdio.h>
#include<string.h>


int main()
{
    char string[100];
    char newstr[27];
    scanf("%s",string);

    int counter = 0, arr[26] = {0};
    for(int i=0 ; string[i]  ; i++)
    {
        if(arr[string[i]-97] == 0)
        {
            arr[string[i]-97] = 1;
            newstr[counter] = string[i];
            counter++;
        }
        
    }
    newstr[counter] = '\0';
    printf("\n\n%s",newstr);

    

}