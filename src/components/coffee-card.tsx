import { Coffee } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  intensity: number;
  imageUrl?: string;
  onSelect: () => void;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  intensity,
  imageUrl,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Coffee className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Typography.Small className="text-muted-foreground">
              Roast Level
            </Typography.Small>
            <Typography.P className="font-medium">{roastLevel}</Typography.P>
          </div>
          <div>
            <Typography.Small className="text-muted-foreground">
              Intensity
            </Typography.Small>
            <Typography.P className="font-medium">{intensity}/10</Typography.P>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className="w-full"
          variant="default"
          onClick={onSelect}
        >
          Select This Coffee
        </Button>
      </CardFooter>
    </Card>
  );
}