/**
 * rot13.c
 *
 * Kathryn Stoddard
 * kathryn.stoddard@gmail.com
 *
 * Creates an encryption for plaintext, based on a key
 * provided by the user as a command line argument.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <cs50.h>

int main(int argc, string argv[])
{
    // Exit progam if argc is not 2
    if (argc != 2)
    {
        printf("Usage: ./caesar <key>\n");
        return 1;
    }

    // Initialize key variable
    int key = atoi(argv[1]);

    // Initialize plaintext and sets it equal to user input
    string plaintext = GetString();

    // Initialize n variable for loop
    int n = strlen(plaintext);

    // Initialize result variable
    int result;

    for (int i = 0; i < n; i++)
    {
        // If capital letter rotates 13 letters and prints
        if (plaintext[i] >= 65 && plaintext[i] <= 90)
        {
            result = (plaintext[i] - 65 + key) % 26;
            printf("%c", result + 65);
        }
        // If lowercase letter rotates 13 letters and prints
        else if (plaintext[i] >= 97 && plaintext[i] <= 122)
        {
            result = (plaintext[i] - 97 + key) % 26;
            printf("%c", result + 97);
        }
        else
        {
            // Else prints symbol with no rotation
            printf("%c", plaintext[i]);
        }
    }
    printf("\n");
    return 0;
}
