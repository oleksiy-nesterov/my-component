read -p 'New Component Name (like a "my-component"): ' name

tag=`node -p "\"$name\".toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+)|(-+$)/g, '')"`
element=`node -p "\"$tag\".replace(/^./, s => s.toUpperCase()).replace(/\-+(.)/g, (_, s) => s.toUpperCase())+'Element'"`

echo
echo "HTML tag: <$tag></$tag>"
echo "HTML element: $element"
echo

read -p "Continue (y/n)? " continue
if [[ $continue =~ ^[Yy]$ ]] 
then
    for f in src/index.ts example/index.html package.json README.md; do
        echo $f - ok;
        if test -f $f; then
            sed -i '' -e "s/my-component/$tag/" $f
            sed -i '' -e "s/MyComponentElement/$element/" $f
        fi
    done
echo
fi