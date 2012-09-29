#!/bin/sh

resFile=fs-scanner.json

if [ -f "$resFile" ]
then
	rm "$resFile"
fi

touch $resFile

addDirectory()
{
	echo "{\"dir\":\"$1\",\"files\":[" >> $resFile
}

addFile()
{
	echo "\"$1\"," >> $resFile
}

checkType ()
{
	if [ -f "$1" ]
	then
		addFile "$1" "$2"
	fi

	if [ -d "$1" ]
	then
		echo "]}," >> $resFile
		addDirectory "$1"
		readFiles "$1/"
	fi
}

readFiles ()
{
	for file in $1*
	do
    		checkType "$file" "$1"
	done
}


folder=$1

echo "[" >> $resFile

addDirectory "$folder"

readFiles "$folder"

echo "]}]" >> $resFile




