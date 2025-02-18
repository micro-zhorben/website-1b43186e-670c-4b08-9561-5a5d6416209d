import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PreferenceData {
  roastLevel: string;
  intensity: number;
  brewMethod: string;
}

interface PreferenceSelectorProps {
  onSubmit: (preferences: PreferenceData) => void;
}

export function PreferenceSelector({ onSubmit }: PreferenceSelectorProps) {
  const [preferences, setPreferences] = useState<PreferenceData>({
    roastLevel: "medium",
    intensity: 5,
    brewMethod: "drip",
  });

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Coffee Preferences</CardTitle>
        <CardDescription>
          Tell us your preferences and we'll recommend the perfect coffee for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Roast Level
          </label>
          <Select
            value={preferences.roastLevel}
            onValueChange={(value) =>
              setPreferences({ ...preferences, roastLevel: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select roast level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Intensity (1-10)
          </label>
          <Slider
            value={[preferences.intensity]}
            min={1}
            max={10}
            step={1}
            onValueChange={(value) =>
              setPreferences({ ...preferences, intensity: value[0] })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Brew Method
          </label>
          <Select
            value={preferences.brewMethod}
            onValueChange={(value) =>
              setPreferences({ ...preferences, brewMethod: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select brew method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="drip">Drip</SelectItem>
              <SelectItem value="espresso">Espresso</SelectItem>
              <SelectItem value="french">French Press</SelectItem>
              <SelectItem value="pourover">Pour Over</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          onClick={() => onSubmit(preferences)}
        >
          Get Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}