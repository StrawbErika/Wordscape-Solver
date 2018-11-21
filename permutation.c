#include <stdio.h>
#include <stdlib.h>							//for malloc()
#include <ctype.h>  						//for tolower()
#include <string.h>							//for strlen()
#define LEN 100

void toLowerString(char*);
int stringComparison(char*, char*);

int main(int argc, char** argv){//checks input
	if(argv[1] == NULL && argv[2] == NULL) {
		printf("Error! Please enter arguments.\n");
		return 0;
	}
	toLowerString(argv[1]);
	toLowerString(argv[2]);
	int noOfChars = strlen(argv[1]);
	int lengthOfWord = strlen(argv[2]);

	int nopts[noOfChars+2]; 													// array of top of stacks
	int option[noOfChars+2][noOfChars+2]; 										// array of stacks of options
	int start, move, i, candidate, dictSize = 0;

	//allocate space of dictionary
	char *dictionary[500000];
	char word[LEN];

	//read words.txt
	FILE *my = fopen("words.txt","r");
	if(my == NULL) {
		printf("Error words.txt not found!\n");
		return 0;
	}
	while(!feof(my)) {
		fscanf(my, "%s", word);
		toLowerString(word);
		if(!stringComparison(word, argv[2]))
		{
			dictionary[dictSize] = (char *)(malloc(sizeof(char) * (lengthOfWord+1)));
			strcpy(dictionary[dictSize++], word);
		}
			
	}
	fclose(my);

	move = start = 0; 
	nopts[start]= 1;
	
	while (nopts[start] >0) { 												// while dummy stack is not empty
		if(nopts[move]>0) {
			move++;
			nopts[move]=0; 													// initialize position - no initial candidates

			if(move == lengthOfWord+1) {									// solution found
				for(i = 0; i < lengthOfWord; i++)
					word[i] = argv[1][option[i+1][nopts[i+1]]-1];
				word[i] = '\0';
				toLowerString(word);

				for(i = 0; i < dictSize; i++)
					if(!stringComparison(word, dictionary[i]))
						printf("%s\n", word);
			}
			else if(move == 1) {											// only case where we'll populate the first position
				for(candidate = noOfChars; candidate >=1; candidate --)
					option[move][++nopts[move]] = candidate;
			}
			else {															// find candidates
				for(candidate=noOfChars;candidate>=1;candidate--) {				
					for(i=move-1;i>=1;i--)
						if(candidate==option[i][nopts[i]]) break;			// check top of stack of previous positions
					if(!(i>=1))												// meaning it did not break - candidate is not used by previous positions
						option[move][++nopts[move]] = candidate;
				}
			}
		}
		else {																// backtracking step
			move--;															// current position has exhausted candidates so move to previous
			nopts[move]--;													// remove current top on this stack

		}
	}

	for(i = 0; i < dictSize; i++) free(dictionary[i]);
}

void toLowerString(char* s) {
	for (int i = 0; i < strlen(s); i++)
		s[i] = tolower(s[i]);
}

int stringComparison(char* s1, char* s2) {
	if(strlen(s1) != strlen(s2)) return 1;
	for(int i = 0; i < strlen(s1); i++) {
		if(s1[i] != '_' && s2[i] != '_') {
			if(s1[i] > s2[i]) return 1;
			else if(s1[i] < s2[i]) return -1;
		}
	}
	return 0;
}